import { injectGlobal } from 'styled-components'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:600|PT+Sans');

    :root {
    background: #f5f6fa;
    color: #9c9c9c;
    font: 1rem "PT Sans", sans-serif;
    }

    html,
    body,
    .container {
    height: 95%;
    }

    a {
    color: inherit;
    }
    a:hover {
    color: #7f8ff4;
    }
    .uppercase {
        text-transform: uppercase;
      }
      
      .btn {
        display: inline-block;
        background: transparent;
        color: inherit;
        font: inherit;
        border: 0;
        outline: 0;
        padding: 0;
        -webkit-transition: all 200ms ease-in;
        transition: all 200ms ease-in;
        cursor: pointer;
      }
      .btn--primary {
        background: #7f8ff4;
        color: #fff;
        -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
                box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding: 12px 36px;
      }
      .btn--primary:hover {
        background: #6c7ff2;
      }
      .btn--primary:active {
        background: #7f8ff4;
        -webkit-box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
                box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
      }
      .btn--inside {
        margin-left: -96px;
      }
`