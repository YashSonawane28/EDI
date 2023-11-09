import React, { useState } from 'react'
import '../css/RegisterLand.css'

const RegisterLand = (props) => {

  const { provider, web3, contract } = props.myWeb3Api;
  const account = props.account;

  const [landDetails, setLandDetials] = useState({
    state:"", district:"", city:"", propertyId:"", surveyNo:"", owner:props.account, marketValue:"" ,tenderName:"", tendertype:" "
  }) 

  const onChangeFunc = (event) =>{
    const {name, value} = event.target;
    setLandDetials({...landDetails, [name]:value});
  }

  const handleOnClick = async () =>{
    await contract.registerLand(landDetails.state, landDetails.district, landDetails.city, landDetails.propertyId, landDetails.surveyNo, landDetails.owner, landDetails.marketValue, landDetails.tenderName,landDetails.tendertype,{
      from: account
    })
    console.log(landDetails)
    setLandDetials({state:"", district:"", city:"", propertyId:"", surveyNo:"", owner:props.account, marketValue:"",tenderName:"",tendertype:""})
  }



  return (
    <div className='container registerLand-maindiv'>
      <div className='row'>

         {/* left form */}
        <div className='col-12 col-sm-6'>
            <form method='POST' className='admin-form'>
                <div className='form-group'>
                    <label>State</label>
                    <input type="text" className="form-control" name="state" placeholder="Enter State" 
                    autoComplete="off" value={landDetails.state} onChange={onChangeFunc}/>
                </div>
                <div className='form-group'>
                    <label>District</label>
                    <input type="text" className="form-control" name="district" placeholder="Enter district" 
                    autoComplete="off" value={landDetails.district} onChange={onChangeFunc}/>
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <input type="text" className="form-control" name="city" placeholder="Enter city" 
                    autoComplete="off" value={landDetails.city} onChange={onChangeFunc}/>
                </div>
                <div className='form-group'>
                    <label>Registration No</label>
                    <input type="text" className="form-control" name="propertyId" placeholder="Enter Registration No" 
                    autoComplete="off" value={landDetails.propertyId} onChange={onChangeFunc}/>
                </div>
            </form>
        </div>

        {/* right form */}
        <div className='col-12 col-sm-6'>
          <form method='POST' className='admin-form'>
            <div className='form-group'>
                <label>surveyNo</label>
                <input type="text" className="form-control" name="surveyNo" placeholder="Enter Chassis ID" 
                autoComplete="off" value={landDetails.surveyNo} onChange={onChangeFunc}/>
            </div>
            <div className='form-group'>
                <label>Market Value</label>
                <input type="number" className="form-control" name="marketValue" placeholder="Enter market value" 
                autoComplete="off" value={landDetails.marketValue} onChange={onChangeFunc}/>
            </div>
            <div className='form-group'>
                <label>TenderName</label>
                <input type="text" className="form-control" name="tenderName" placeholder="Enter Tender Name" 
                autoComplete="off" value={landDetails.tenderName} onChange={onChangeFunc}/>
            </div>

            <div className='form-group'>
                <label>Tender type</label>
                <input type="text" className="form-control" name="tendertype" placeholder="Enter Tender Type" 
                autoComplete="off" value={landDetails.tendertype} onChange={onChangeFunc}/>
            </div>

          </form>
        </div>
      </div>
      <button className='admin-form-btn' onClick={handleOnClick}>Submit</button>
    </div>
  )
}

export default RegisterLand