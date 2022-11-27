//importing react, and some hooks
import React, {useState, useRef} from 'react'

//importing Material UI components
import { Typography, textfi, TextField } from '@material-ui/core'

// importing reducers
import {useDispatch} from 'react-redux'

//To use our styles
import useStyles from './styles';
import { Button } from 'bootstrap';

//funcitonal react component
const CommentSection = ({post}) => {
    console.log('comment Section', post);
    //calling as a hook
    const classes = useStyles();

    const [comments, setComments] = useState([])

    //track the value of the comment
    const [comment, setComment] = useState('')

    const handleClick = () => {
        
    }

    // space for comment section
        // 1. Define the layouts outer and inner div
        // 2. Comments and a margin
        // 3. Future of adding comments and looping

    // space for adding a comment
    //     1. define the layout
    //     2. add text area for typing
    return(
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className= {classes.commentsInnerContainer}>
                    <Typography gutterBottom variant = "h6">Comments</Typography>
                    {comments.map((c,i) => (
                        <Typography key = {i} gutterBottom variant = "subtitle1">
                            Comment{i}
                        </Typography>
                    ))}
                </div>
                <div style = {{width: 70%}}>
                    <Typography gutterBottom variant = "h6">Write a comment</Typography>
                    <TextField
                        fullWidth
                        rows={4}
                        variant = "outlined"
                        label = "Comment"
                        multiline
                        value = {comment}
                        onChange = {(e) => setComment(e.target.value)}
                    />
                    <Button style = {{marginTop:'10px'}} fullWidth disabled = {!comment} variant = 'contained' onClick={handleClick}>
                        post
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default CommentSection;


// Pending
// 1. add comment section in post details
// 2. add prop