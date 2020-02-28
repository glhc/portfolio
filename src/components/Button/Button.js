import React from 'react';

export default function Button(props) {
  return (
    <button>
      { props.text }
      { props.icon &&
        <i class="material-icons">{props.icon}</i>
      }
    </button>
);
};
