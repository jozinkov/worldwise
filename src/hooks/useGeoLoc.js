import { useState } from "react";

export function useGeoLoc() {
  const [yourPosition, setYourPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function getPosition() {
    setIsLoading(true);
    setYourPosition([]);

    function success(position) {
      const { latitude, longitude } = position.coords;
      setYourPosition([latitude, longitude]);
      setIsLoading(false);
    }
    function error() {
      setErr("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  return { getPosition, isLoading, yourPosition, err };
}
