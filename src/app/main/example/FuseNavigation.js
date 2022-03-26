import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, IconButton, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
// import FuseNavItem from '../FuseNavItem';

const StyledList = styled(List)(({ theme }) => ({
  '&.active-square-list': {
    '& .fuse-list-item, & .active.fuse-list-item': {
      width: '100%',
      borderRadius: '0',
    },
  },
  '&.dense': {
    '& .fuse-list-item': {
      paddingTop: 0,
      paddingBottom: 0,
      height: 32,
    },
  },
}));

function FuseNavItem(props) {
  const { name, close, state } = props;

  return (
    <Box
      sx={{
        p: '10px',
        m: '10px',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: '#e6e6e6',
        overflow: 'hidden',
        borderRadius: '8px',
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: '50%',
          width: '50%',
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <div className="flex flex-col">
        <div>
          <h3>{name}</h3>
          <IconButton
            sx={{
              display: 'absolute',
              top: '5%',
              right: '5%',
              // transform: 'translate(-50%, -50%)',
            }}
          >
            {close ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
          </IconButton>
        </div>
        <Divider />
        <div className="flex flex-row">
          <div className="flex flex-col items-center p-10">
            <Button className="bg-green rounded-8 text-white uppercase">claim income</Button>
          </div>
          <Divider />
          <div className="flex flex-row items-center p-10">
            <p>{state}</p>
            <Button className="bg-red rounded-8 text-white uppercase">pay</Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
function FuseNavVerticalLayout1(props) {
  // const { navigation, layout, active, dense, className, onItemClick } = props;
  const navigation = [
    { name: 'Home', close: true, state: 'Mortgage Fee Paid' },
    { name: 'Profile', close: false, state: 'Mortgage Fee Not Paid' },
  ];
  const dispatch = useDispatch();

  // function handleItemClick(item) {
  //   onItemClick?.(item);
  // }

  return (
    <StyledList className={clsx('navigation whitespace-nowrap px-12')}>
      {navigation.map((_item) => (
        <FuseNavItem
          key={_item.name}
          title={_item.name}
          close={_item.close}
          state={_item.state}
          // onItemClick={handleItemClick}
        />
      ))}
    </StyledList>
  );
}

export default FuseNavVerticalLayout1;
