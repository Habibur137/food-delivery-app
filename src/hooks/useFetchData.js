import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useFetchData = (collection) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, `${collection}`);
      try {
        onValue(dataRef, (snapshot) => {
          setError("");
          setLoading(true);
          const data = snapshot.val();
          setMenu(data);
          setLoading(false);
        });
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, [collection]);

  return { menu: menu, loading: loading, error: error };
};

export default useFetchData;
