import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Wrapper from './RENDER/Wrapper';

function App() {
  return (
    <div>
      <h3>HOC</h3>
      <div className='buttons'>
        <LikeImage/>
        <LikePost />
      </div>
      <h3>Some Render</h3>
      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter = {counter} handleLikeImageCount = {handleIncreament}/>
        }}/>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost likePostCounter = {counter} handleLikePostCount = {handleIncreament}/>
        }}
/>
      </div>
    </div>
  );
}

export default App;
