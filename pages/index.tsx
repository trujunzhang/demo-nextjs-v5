import App from '../components/App/App';
export default () => {
  const fontSize = '50px';
  return (
    <App>
      <div className="example">Welcome to Next.JS v5 + React 16.2</div>
      <style>{`
        .example {
          font-size: ${fontSize};
        }
      `}</style>
    </App>
  );
};
