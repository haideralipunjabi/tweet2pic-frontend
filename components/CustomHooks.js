import { useState, useEffect } from "react";
export function useInterface(callback, initInputs = {}) {

  const [inputs, setInputs] = useState(initInputs);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    let key = event.target.name
    let value = event.target.value
    if (event.target.type == "checkbox") {
      value = event.target.checked;
    }
    setInputs((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  };
  const setInput = (key,value) => {
    setInputs((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  }
  useEffect(() => {
    setInputs(
      Object.fromEntries(
        Object.entries(initInputs).map(entry=>{
          let fromLS = window.localStorage.getItem("settings-"+entry[0])
          if(entry[0]==="url" || fromLS===null) return entry
          fromLS = (fromLS==="true")
          return [
            entry[0],fromLS
          ]
        })
      )
    )
  }, [])
  useEffect(() => {
    Object.entries(inputs).forEach(entry=>{
      if(entry[0]==="url") return
      window.localStorage.setItem("settings-"+entry[0],entry[1])
    })
  }, [inputs])
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    setInput
  };
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
