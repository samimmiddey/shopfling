import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup, styled, Button, ListItemButton, Checkbox, Typography, useTheme, useMediaQuery } from '@mui/material';
import CustomizedTextfield from '../../UI/CustomizedTextfield';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useContext } from 'react';
import { uiContext } from '../../../context/ContextProvider';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PrimaryButton from '../../UI/PrimaryButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const QuantityButton = styled(Button)({
   minHeight: 0,
   minWidth: 0,
   width: '100%',
   padding: '5px 0'
});

const MailGridTwo = ({ mailAppData, categoryButtonBg }) => {
   const { currentMailIndex, currentColor, currentlySelectedMailIndex, setCurrentlySelectedMailIndex, toggleAction, toggleMailMenu, setOpenSelectedMailDrawer, darkMode } = useContext(uiContext);
   const [allMailData, setAllMailData] = useState(mailAppData);
   const [mailData, setMailData] = useState(allMailData[currentMailIndex].mails);
   const [selectedMails, setSelectedMails] = useState([]);
   const [starred, setStarred] = useState([]);
   const [important, setImportant] = useState([]);

   const border = darkMode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)';

   const theme = useTheme();
   const mdWidth = useMediaQuery(theme.breakpoints.down('md'));

   const handleSearchMails = e => {
      setMailData(allMailData[currentMailIndex].mails.filter(mail => mail.name.split(' ').join('').toLowerCase().includes(e.target.value)));
   };

   const handleCheck = e => {
      if (e.target.checked) {
         setSelectedMails(selectedMails.concat(mailData.find(mail => mail.name === e.target.name)));
      } else {
         setSelectedMails(selectedMails.filter(mail => mail.name !== e.target.name));
      }
   };

   const handleDelete = () => {
      if (selectedMails.length >= 1) {
         setMailData(mailData.filter(mail =>
            !selectedMails.some(selected => selected.name === mail.name)
         ));

         setAllMailData(allMailData.map((mail, index) => {
            if (index === currentMailIndex) {
               return {
                  ...mail,
                  mails: mail.mails.filter(item => !selectedMails.some(selected => selected.name === item.name))
               }
            }

            return {
               ...mail
            }
         }
         ));

         setCurrentlySelectedMailIndex(0);

         const filteredMailData = mailData.filter(mail =>
            !selectedMails.some(selected => selected.name === mail.name)
         );
         const names = filteredMailData.map(mail => mail.name);
         setStarred(starred.filter(star => star.currentMailIndex === currentMailIndex ? names.includes(star.name) : star));
         setImportant(important.filter(imp => imp.currentMailIndex === currentMailIndex ? names.includes(imp.name) : imp));
      }
   };

   useEffect(() => {
      setMailData(allMailData[currentMailIndex].mails);
   }, [currentMailIndex, allMailData]);

   return (
      <Box
         sx={theme => ({
            borderRight: border,
            minWidth: '290px',
            [theme.breakpoints.down('md')]: {
               borderRight: 'none'
            },
            [theme.breakpoints.down('sm')]: {
               minWidth: '250px'
            }
         })}
      >
         <Box
            sx={theme => ({
               height: '75px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '0 1rem',
               borderBottom: border,
               [theme.breakpoints.down('md')]: {
                  columnGap: '1rem'
               }
            })}
         >
            <Box
               onClick={() => toggleMailMenu()}
               sx={theme => ({
                  [theme.breakpoints.up('md')]: {
                     display: 'none'
                  }
               })}
            >
               <PrimaryButton
                  text={<MenuOutlinedIcon />}
                  color={currentColor}
                  padding='8px 20px'
               />
            </Box>
            <CustomizedTextfield
               size='small'
               label='Search Emails'
               width='100%'
               handleChange={handleSearchMails}
            />
         </Box>
         <Box
            sx={{
               height: '70px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '0 1rem',
               borderBottom: border
            }}
         >
            <ButtonGroup variant="outlined" size='small' color='primary' sx={{ width: '100%' }}>
               <QuantityButton onClick={handleDelete}>
                  <DeleteOutlinedIcon sx={{ fontSize: '1.25rem' }} />
               </QuantityButton>
               <QuantityButton onClick={event => toggleAction(event.currentTarget)}>
                  <FolderOpenOutlinedIcon sx={{ fontSize: '1.25rem' }} />
               </QuantityButton>
               <QuantityButton >
                  <ArchiveOutlinedIcon sx={{ fontSize: '1.25rem' }} />
               </QuantityButton>
            </ButtonGroup >
         </Box>
         <Box
            sx={theme => ({
               padding: '8px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               justifyContent: 'flex-start',
               rowGap: '8px',
               height: '525px',
               overflowY: 'hidden',
               overflowX: 'hidden',
               '&:hover': {
                  overflowY: 'auto'
               },
               [theme.breakpoints.down('md')]: {
                  height: '575px'
               }
            })}
         >
            {mailData.map((item, index) => (
               <ListItemButton
                  key={index}
                  disableRipple
                  sx={{
                     borderRadius: '8px',
                     px: 1.5,
                     py: 1.5,
                     maxHeight: 90,
                     transition: '300ms ease',
                     display: 'flex',
                     alignItems: 'center',
                     columnGap: '8px',
                     width: '100%',
                     backgroundColor: index === currentlySelectedMailIndex ? `${currentColor}25` : '',
                     '&:hover': {
                        backgroundColor: index === currentlySelectedMailIndex ? `${currentColor}25` : ''
                     }
                  }}
               >
                  <Checkbox
                     size='small'
                     onChange={handleCheck}
                     name={item.name}
                     checked={
                        selectedMails.indexOf(item) !== -1
                           ? true
                           : false
                     }
                  />
                  <Box
                     onClick={() => {
                        setCurrentlySelectedMailIndex(index);
                        mdWidth && setOpenSelectedMailDrawer();
                     }}
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        rowGap: '2px',
                        width: '100%'
                     }}
                  >
                     <Typography
                        sx={{
                           fontSize: '14px',
                           color: index === currentlySelectedMailIndex && darkMode === 'dark' ? 'white' : 'text.primary',
                           fontWeight: 600,
                           marginTop: '-4px'
                        }}
                     >
                        {item.name}
                     </Typography>
                     <Typography
                        className='mail-text-wrap'
                        sx={{
                           fontSize: '12px',
                           color: index === currentlySelectedMailIndex && darkMode === 'dark' ? 'white' : 'text.disabled'
                        }}
                     >
                        {item.subject}
                     </Typography>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'space-between',
                           marginTop: '4px',
                           width: '100%'
                        }}
                     >
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '5px'
                           }}
                        >
                           <Button
                              disableElevation
                              disableRipple
                              sx={{
                                 textTransform: 'none',
                                 fontSize: '10px',
                                 borderRadius: '10px',
                                 minHeight: 0,
                                 minWidth: 0,
                                 padding: '1px 10px',
                                 color: 'white',
                                 backgroundColor: `${categoryButtonBg.filter(bg => bg.category === item.category)[0].color}`,
                                 '&:hover': {
                                    backgroundColor: `${categoryButtonBg.filter(bg => bg.category === item.category)[0].color}`
                                 }
                              }}
                           >
                              {item.category}
                           </Button>
                           <StarBorderOutlinedIcon
                              sx={{
                                 fontSize: '20px',
                                 marginLeft: '5px',
                                 color: starred.some(star => star.name === item.name) ? 'rgb(255, 193, 7)' :
                                    (!starred.some(star => star.name === item.name) && darkMode === 'dark') && index === currentlySelectedMailIndex ? 'white' : ''
                              }}
                              onClick={() => {
                                 if (!starred.some(star => star.name === item.name)) {
                                    setStarred(starred.concat({ currentMailIndex: currentMailIndex, name: item.name }))
                                 } else {
                                    const existingElement = starred.filter(star => star.name !== item.name);
                                    setStarred(existingElement);
                                 }
                              }}
                           />
                           <InfoOutlinedIcon
                              sx={{
                                 fontSize: '16px',
                                 color: important.some(imp => imp.name === item.name) ? 'rgb(255, 192, 187)' :
                                    (!important.some(imp => imp.name === item.name) && darkMode === 'dark') && index === currentlySelectedMailIndex ? 'white' : ''
                              }}
                              onClick={() => {
                                 if (!important.some(imp => imp.name === item.name)) {
                                    setImportant(important.concat({ currentMailIndex: currentMailIndex, name: item.name }))
                                 } else {
                                    const existingElement = important.filter(imp => imp.name !== item.name);
                                    setImportant(existingElement);
                                 }
                              }}
                           />
                        </Box>
                        <Typography
                           sx={{
                              color: index === currentlySelectedMailIndex && darkMode === 'dark' ? 'white' : 'text.primary',
                              fontSize: '12px',
                              fontWeight: 500
                           }}
                        >
                           {item.time}
                        </Typography>
                     </Box>
                  </Box>
               </ListItemButton>
            ))}
         </Box>
      </Box>
   );
};

export default MailGridTwo;