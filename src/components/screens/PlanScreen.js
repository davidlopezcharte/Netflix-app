import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { selectUser } from '../../features/userSlice';
import db from '../../library/firebase';
import '../../styles/PlanScreen.css';

export const PlanScreen = () => {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach(async (subscriptions) => {
          console.log(subscriptions);
          setSubscription({
            role: subscriptions.data().role,
            current_period_end: subscriptions.data().current_period_end.seconds,
            current_period_start: subscriptions.data().current_period_start.seconds
          });
        });
      });
  }, [user.uid]);

  console.log(new Date(subscription?.current_period_end));

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        // console.log(querySnapshot);
        const product = {};
        querySnapshot.forEach(async (productDoc) => {
          // console.log(productDoc);
          product[productDoc.id] = productDoc.data();
          // console.log(product);
          const priceSnap = await productDoc.ref.collection('prices').get();
          // console.log(priceSnap.docs);
          priceSnap.docs.forEach((price) => {
            product[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            };
          });
        });
        setProducts(product);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    setLoading(true);
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error ocurred: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51JmJSHJOlYHmKawnvRMog0z1TdQyPGPFBKJqckkQfD6q24eHVqhywMdvU5fjERKXBiWTkx8fxBevoGUdhhDbCJj300YUeZLYIr'
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="planScreen">
      {subscription && (
        <p>
          Renewal Date:
          {'  '}
          {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData?.name?.toLowerCase().includes(subscription?.role);
        return (
          <div className="planScreen__plan" key={productId}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className={!isCurrentPackage ? 'planScreen__button' : ''}
              type="button"
              disabled={loading}
              onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}
            >
              {isCurrentPackage ? 'Current Plan' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

/* <div className="PlanScreen">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border loader" role="status"></div>
        </div>
      )}

      {subscription && (
        <p>
          Renewal Date:
          {'  '}
          {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        console.log(productData);
        console.log(productId);

        const isCurrentPackage = productData?.name?.toLowerCase().includes(subscription?.role);
        console.log(isCurrentPackage);
        return (
          <div className="planScreen__plan" key={productId}>
            <div className="planScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              className={!isCurrentPackage ? 'planScreen__button' : ''}
              type="button"
              disabled={loading}
              onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}
            >
              {isCurrentPackage ? 'Current Plan' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div> */