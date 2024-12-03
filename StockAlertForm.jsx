const StockAlertForm = ({ symbol }) => {
    const [threshold, setThreshold] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, threshold }),
      }).then((res) => alert('Alert set!'));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Alert Price"
        />
        <button type="submit">Set Alert</button>
      </form>
    );
  };
  
  export default StockAlertForm;
  