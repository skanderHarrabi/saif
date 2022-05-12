import React, { useState } from "react";
import { Input, Icon } from 'antd';

function formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?[0-9]*(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            console.log(value);
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.


    render() {
        const { value } = this.props;
        const title = value ? (
            <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
        ) : (
                'Input a number'
            );
        return (
            <input
                {...this.props}
                onChange={this.onChange}
                className="form-control" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."
            />
        );
    }
}

// class NumericInputDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//   }

//   onChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
//     );
//   }
// }
export default NumericInput;