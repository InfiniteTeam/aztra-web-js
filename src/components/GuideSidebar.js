import React, { Component } from 'react';
import guides from '../pages/guide/guides';

export default class GuideSidebar extends Component {
  render() {
    const ls = guides.map(
      (one, index) => (
        this.props.whose === one.whose &&
          <a key={index} href={`/guide/${one.whose}/${one.name}`} style={{
          }}>
            {one.title
          }</a>
      )
    )
    return (
      <>
        <h5 style={{
          fontWeight: 'bold'
        }}>
          가이드
        </h5>
        {ls}
      </>
    );
  }
}
