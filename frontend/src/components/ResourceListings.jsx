import ResourceListing from "./ResourceListing";
import { useEffect, useState } from "react";
import { getResources } from "../api/resources";
import Spinner from "./Spinner";

const ResourceListings = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const response = await getResources();
        setResources(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resources:", error);
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return <div>ResourceListings</div>;
};

export default ResourceListings;
