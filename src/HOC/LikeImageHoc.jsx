import WrapperHoc from "./WrapperHoc";

function LikeImageHoc(props){
    return (
        <div>
            <button onClick={props.handleCounter}>Like Image</button>
        </div>
    )
}

export default WrapperHoc(LikeImageHoc);