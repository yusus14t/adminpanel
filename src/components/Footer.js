import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="row  tm-footer p-4 ">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright © <b>2023</b> All rights reserved. Design:{" "}
            <a
              rel="nofollow noopener"
              href="https://www.linkedin.com/in/yusuf14t/"
              className=""
            >
              Yusuf 14T
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
