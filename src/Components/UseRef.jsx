import React, { useState, useEffect, useRef } from 'react';

function UseRef() {
    let count = useRef(0);
    let [name, setName] = useState("");
    let ref1 = useRef();
    let ref2 = useRef();
    let ref3 = useRef();
    let ref4 = useRef();

    useEffect(() => {
        ref1.current.focus();
    }, []);
    useEffect(() => {
        ++count.current;
    });

    const handleKeyUp1 = (e) => {
        if (e.key >= 0 && e.key <= 9) {
            ref2.current.focus();
        }
    };
    const handleKeyUp2 = (e) => {
        if (e.key >= 0 && e.key <= 9) {
            ref3.current.focus();
        }
    };
    const handleKeyUp3 = (e) => {
        if (e.key >= 0 && e.key <= 9) {
            ref4.current.focus();
        }
    };
    const handleKeyUp4 = (e) => {
        if (e.key >= 0 && e.key <= 9) {
            handleSubmit();
        }
    };
    const reset = () => {
        ref1.current.value = "";
        ref2.current.value = "";
        ref3.current.value = "";
        ref4.current.value = "";
        ref1.current.focus();
    };
    const handleSubmit = () => {
        let otp = ref1.current.value + ref2.current.value + ref3.current.value + ref4.current.value;
        if (otp.length === 4) {
            alert(`Entered OTP is ${otp}`);
            reset();
        } else {
            alert("Invalid OTP");
            reset();
        }
    };

    // JSX should be outside of the internal functions
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">UseRef</h1>
                    </div>
                    <div className="row">
                        <h1>Enter your OTP</h1>
                        <div>
                            <input type="number" ref={ref1} onKeyUp={handleKeyUp1} />
                            <input type="number" ref={ref2} onKeyUp={handleKeyUp2} />
                            <input type="number" ref={ref3} onKeyUp={handleKeyUp3} />
                            <input type="number" ref={ref4} onKeyUp={handleKeyUp4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UseRef;
