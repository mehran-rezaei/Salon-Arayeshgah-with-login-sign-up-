import React , {useContext, useEffect, useState} from 'react';
// import { modalHandler } from '@/context/ModalContextProvider';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { sendCodetoVerifyByEmail, sendEmailorPhone } from '@/Dataservice/ForgetPassProvider';
// import { notify } from '@/helper/toust';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Divider } from "antd";
import MainButton from '@/components/elements/button/MainButton';
import VerificationInput from "react-verification-input";


const SalonModaLogin = () => {
  const { t } = useTranslation();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: '#F8F6EB',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        // overflow:'scroll',
        // overflow : 'hidden',
        maxHeight: 700,
        minHeight: 390,
        
      };

      const [open, setOpen] = React.useState(true);
      // const [open, setOpen] = React.useState(false);
  
      const handleOpen = () => setOpen(true);
      const handleClose = () => {
        setOpen(false);
        // dispatch({type : 'OFF_LOGIN_VALIDATION'})
      }
      const [data , setData] = useState({
        code : '',
    })
    const changeHandler = (event:any) => {
      setData({ ...data , [event.target.name] : event.target.value })
      console.log(data);
    }
    const sendData = () => {
    //   sendCodetoVerifyByEmail(state.email,data.code)
    //   .then(Response => {
    //     console.log(Response);
    //   dispatch({type : 'ON_LOGIN_CHANGEPASS' , payload: state.email})
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     notify('error','invalid code  ')
        
    //   })
    }
    const sendAgain =() => {
    //   sendEmailorPhone(state.email,1)
    //   .then(Response => {
    //     console.log(Response);
    //     setSeconds(60)
    //     // notify('success','sended')               
    //   })
    //   .catch(error => {
    //     console.log(error); 
    //     notify('error','invalid Email  ')     
    //   })
    }
    // const [ minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                    clearInterval(myInterval)        
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    return (
        <div>
        <Modal
          // keepMounted
          open={open}
          // onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
      <Box sx={style} >
      <div className='cddddd'>
            <Divider style={{  borderColor: 'black' , fontSize : 28,  }}  >   
                  <img src="../../images/ModalTic.png" alt="" className='h-6' />  
              </Divider>
            </div>
        <div className='flex justify-center items-center flex-col w-full'>
    
            <h1 className="text-center text-2xl font-bold mb-3">  
            {t('We Send A Code On You Email For Verifiy ')}  </h1>
            <h2>Lorem ipsum dolor sit amet consectetur. Eu sed felis velit ac quisqu</h2>
            <div className='mb-9 mt-5'>   
            <VerificationInput
             validChars="0-9" inputProps={{ inputMode: "numeric" }}
             placeholder="" 
              classNames={{ 
                container: "container",
                character: "character",
                // characterInactive: "character--inactive",
                // characterSelected: "character--selected",
              }}
            />
            </div>
        <div className='w-2/3 mt-5'><MainButton text={'Submit'} /></div>
        <div className='mt-3'>
            <span>resend after 60 s</span>
            <span className='mx-3 text-[#1F59EE]'>Resend</span>
        </div>
        </div>
        
      </Box>
        </Modal>
        
        {/* <h1 onClick={handleOpen}>open me</h1> */}
        </div>
    );
};

export default SalonModaLogin;