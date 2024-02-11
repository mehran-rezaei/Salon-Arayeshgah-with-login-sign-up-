import React , {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import { modalHandler } from '@/context/ModalContextProvider';
// import { sendCodetoVerifyByEmail, sendEmailorPhone } from '@/Dataservice/ForgetPassProvider';
// import { notify } from '@/helper/toust';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { Divider } from "antd";
import MainButton from '@/components/elements/button/MainButton';


const SalonModal2 = () => {
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
        minHeight: 300,
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
    
    const sendData = () => {
    }
    const sendAgain =() => {
    }

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
        <div className='flex justify-center text-center items-center flex-col w-full'>
            <h1 className="text-center text-2xl font-bold mb-3">  
          {t('Congratulations ! Your Information Has Been Verified .')}  </h1>
            <h2 className='w-2/3 font-semibold'>Lorem ipsum dolor sit amet consectetur. Eu sed felis velit ac quisqu</h2>
        <div className='w-2/3 mt-9'><MainButton text={'Continuation'} /></div>
        </div>
      </Box>
        </Modal>
        {/* <h1 onClick={handleOpen}>open me</h1> */}
        </div>
    );
};

export default SalonModal2;