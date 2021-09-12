import React from 'react';
import Fade from 'react-reveal/Fade';
import {InputText, InputFile} from 'elements/Form';
import logoBRI from 'assets/images/logo_bri.png';
import logoMega from 'assets/images/logo_mega.png';

export default function Payment(props) {
    const {data, ItemDetails, checkout} = props;
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 + subTotal;
    return (
        <Fade>
        <div className="container" style={{marginBottom: 30}}>
            <div className="row justify-content-center align-items-center">
                <div className="col-5 py-5" style={{paddingRight: 80}}>
                    <Fade delay={300}>
                        <p className="mb-4">Tranfer Pembayaran:</p>
                        <p>Tax: {tax}%</p>
                        <p>Sub Total: ${subTotal} USD</p>
                        <p>Total: ${grandTotal} USD</p>
                        <div className="row mt-4">
                            <div className="col-3 text-right">
                                <img src={logoBRI} alt="Bank Rakyat Indonesia" width="60"/>
                            </div>
                            <div className="col">
                                <dl>
                                    <dd>Bank Rakyat Indonesia</dd>
                                    <dd>002221 929292</dd>
                                    <dd>Nate River</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3 text-right">
                                <img src={logoMega} alt="Bank Mega" width="60"/>
                            </div>
                            <div className="col">
                                <dl>
                                    <dd>Bank Mega</dd>
                                    <dd>01118 2921920</dd>
                                    <dd>Nate River</dd>
                                </dl>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="col-5 py-5" style={{paddingLeft: 80}}>
                    <Fade delay={600}>
                        <label htmlFor="proofPayment">Upload Bukti Pembayaran</label>
                        <InputFile
                        accept="image/*"
                        id="proofPayment"
                        name="proofPayment"
                        value={data.proofPayment}
                        onChange={props.onChange}
                        />
                        <label htmlFor="bankName">Asal Bank</label>
                        <InputText
                        id="bankName"
                        name="bankName"
                        type="text"
                        value={data.bankName}
                        onChange={props.onChange}
                        />
                        <label htmlFor="bankHolder">Nama Pengirim</label>
                        <InputText
                        id="bankHolder"
                        name="bankHolder"
                        type="text"
                        value={data.bankHolder}
                        onChange={props.onChange}
                        />
                    </Fade>
                </div>
            </div>
        </div>
        </Fade>
    )
}
