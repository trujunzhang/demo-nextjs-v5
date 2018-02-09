import './ping.scss'
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
    </App>
  );
};