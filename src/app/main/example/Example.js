import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import FuseSuspense from '@fuse/core/FuseSuspense';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/system';
import { Divider } from '@mui/material';

import { useTranslation } from 'react-i18next';
import FuseNavigation from './FuseNavigation';
import ItemList from './ItemList';

const Root = styled(FusePageSimple)(({ theme }) => ({
  // height: '100%',
  margin: '10px 0',
  borderRadius: '8px',
  // '& .FusePageSimple-header': {
  //   minHeight: 64,
  //   height: 64,
  // },
  '& .FusePageSimple-wrapper': {
    minHeight: 0,
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 24,
  },
  '& .FusePageSimple-sidebar': {
    width: 388,
    backgroundColor: '#f5f5f5 !important',
    borderRadius: 8,
    borderRight: '0px',
    // paddingTop: 8,
  },
  '& .FusePageSimple-sidebarHeader': {
    height: 'none',
    minHeight: 'none',
    color: 'inherit',
    backgroundColor: 'transparent',
  },
  '& .description': {
    fontSize: 20,
    marginBottom: 40,
  },
  '& .dragMap': {
    borderRadius: 8,
    backgroundColor: '#ececec',
  },
}));

function ExamplePage(props) {
  const pageLayout = useRef(null);
  const { t } = useTranslation('examplePage');

  return (
    <div className="h-full">
      <div className="flex flex-col px-4 md:px-12 w-full p-20">
        <h1 className="text-left uppercase font-bold">
          real estate <span className="text-deep-purple-900">tycoon</span>
        </h1>
        <Divider />
        <p className="flex flex-1 px-8 lg:px-12">
          flex flex-1 items-center sm:justify-center px-8 lg:px-12flex flex-1 items-center
          sm:justify-center px-8 lg:px-12flex flex-1 items-center sm:justify-center px-8
          lg:px-12flex flex-1 items-center sm:justify-center px-8 lg:px-12
        </p>
      </div>
      <Root
        leftSidebarHeader={
          <div className="flex items-center justify-center px-4 md:px-12 h-full w-full uppercase">
            asset potfolio
          </div>
        }
        content={
          <>
            <div className="dragMap">
            </div>
            <div className="flex flex-col flex-1 relative py-32">
              <h3 className="uppercase">state list</h3>
              <ItemList />
            </div>
          </>
        }
        leftSidebarContent={<FuseNavigation />}
        innerScroll
        ref={pageLayout}
      />
    </div>
  );
}

export default ExamplePage;
