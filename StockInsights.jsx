const StockInsights = ({ symbol }) => {
    const [insights, setInsights] = useState(null);
  
    useEffect(() => {
      fetch(`/api/stocks/insights/${symbol}`)
        .then((res) => res.json())
        .then((data) => setInsights(data));
    }, [symbol]);
  
    if (!insights) return <p>Loading insights...</p>;
  
    return <div>{JSON.stringify(insights)}</div>;
  };
  
  export default StockInsights;
  