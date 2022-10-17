import Card_Rounded from '../Card_Rounded/Card_Rounded';
import styles from './Column_nosotros.module.css';
import { useEffect, useState, useContext } from 'react';
import { getFirestore } from '../../utils/firebase';

const Column_Nosotros = () => {
  const [favProyects, setFavProyects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProyects = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = db.collection(`members`);
        const itemSnapshot = await itemsCollection.get();

        const items = itemSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setFavProyects(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProyects();
  }, []);
  return (
    <div className="container is-widescreen my-6">
      <div className="columns is-multiline is-justify-content-center">
        {!loading &&
          favProyects.map((member, index) => {
            return (
              <div
                key={index}
                className={`column is-one-third ${styles['divrounded']}`}
              >
                <Card_Rounded
                  img={member.img}
                  name={member.name}
                  rol={member.rol}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Column_Nosotros;
