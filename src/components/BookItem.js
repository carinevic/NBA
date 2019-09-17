import React from 'react';
import {css} from 'glamor';

let bookitem = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    ':hover':{
        color: 'blue'
    }
})


const BookItem = (props) => {
    return (
        <div{...bookitem}>
            <h3>{props.item.title }</h3>
            <h3>{props.item. author}</h3>
        </div>
    );
}

export default BookItem;
