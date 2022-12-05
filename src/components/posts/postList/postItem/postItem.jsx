import classes from './postItem.module.css';
import MyButton from '../../../../UI/button/button';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {

    const navigate = useNavigate()

    const goPost = () => navigate(`/posts/${props.post.id}`) 

    const removePost = () => {
        props.remove(props.post)
    }

    return (
        <div className={classes.container}>
            <div className={classes.block}>
                <div className={classes.description}>
                    <div><h2>{props.number}.{props.post.title}</h2></div>
                    <div><p>{props.post.body}</p></div>
                </div>
                <div className={classes.button}>
                    <MyButton onClick={goPost}>перейти</MyButton>
                    <MyButton onClick={removePost}>&times;</MyButton>
                </div>
            </div>
        </div>
    );
}
export default PostItem;