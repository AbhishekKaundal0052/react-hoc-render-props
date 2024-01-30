export default function LikeImage(props){
    return (
        <div>
            <button onClick={props.handlePostCount}>Like Image {props.LikeImageCounter}</button>
        </div>
    )
}