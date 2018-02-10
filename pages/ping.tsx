import App from '../components/App/App';

export namespace Ping {
  export interface Props { }
  export interface State { }
}

export default (props: Ping.Props) => {
  return (
    <App>
      <div className="myDiv">
        <h1>PING</h1>
        <pre>
          {JSON.stringify(props)}
        </pre>
      </div>
      <style>{`
        img {
          width: 300px;
          height: 300px;
          }
        h1 {
          font-family: Arial;
        }
        .myDiv {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
      `}</style>      
    </App>
  );
};