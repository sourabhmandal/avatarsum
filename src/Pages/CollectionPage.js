import React, { useContext, useEffect, useState } from 'react';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { UserContext } from '../Context/UserContext';
import Avatar from '../Components/Avatar';
import { ColorContext } from '../Context/ColorContext';

function CollectionPage() {
  const { user } = useContext(UserContext);
  const { setPallete } = useContext(ColorContext);
  const [pandas, setPandas] = useState([]);
  const [allpallete, setallpallete] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    if (user) {
      fetch(`api/panda/${user.data.id}`, requestOptions)
        .then((resp) => resp.text())
        .then((result) => {
          result = JSON.parse(result);
          setPandas(result);
        })
        .catch((error) => console.log('error', error));
    }

    if (user) {
      fetch(`api/pallete/${user.data.id}`, requestOptions)
        .then((resp) => resp.text())
        .then((result) => {
          result = JSON.parse(result);
          setallpallete(result);
        })
        .catch((error) => console.log('error', error));
    }

    return () => {};
  }, [user]);

  const handlePandaDelete = (id) => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    if (user) {
      fetch(`api/panda/${id}`, requestOptions)
        .then((resp) => resp.text())
        .then((result) => {
          console.log(result);
          setPandas((prev) => {
            prev = prev.filter((el) => el._id !== id);
            return prev;
          });
        })
        .catch((error) => console.log('error', error));
    }
  };
  const handlePalleteDelete = (id) => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow',
    };
    if (user) {
      fetch(`api/pallete/${id}`, requestOptions)
        .then((resp) => resp.text())
        .then((result) => {
          setallpallete((prev) => {
            prev = prev.filter((el) => el._id !== id);
            return prev;
          });
        })
        .catch((error) => console.log('error', error));
    }
  };

  return (
    <>
      <SignedIn>
        <div className='mx-1 sm:mx-2 md:mx-5 lg:mx-20 xl:mx-40'>
          <h1 className='text-3xl m-4 font-bold text-purple-500'>
            Saved Palletes
          </h1>
          <div className='grid sm:grid-cols-1 mx-32 md:mx-0 md:grid-cols-2 xl:grid-cols-3 gap-5 '>
            {allpallete.map((el, idx) => {
              const { pallete } = el;
              return (
                <div className='flex' key={idx}>
                  <div className='mr-5 my-auto flex'>
                    <p
                      className='w-8 h-8 mr-1'
                      style={{ backgroundColor: pallete[0] }}
                    ></p>
                    <p
                      className='w-8 h-8 mr-1'
                      style={{ backgroundColor: pallete[1] }}
                    ></p>
                    <p
                      className='w-8 h-8 mr-1'
                      style={{ backgroundColor: pallete[2] }}
                    ></p>
                    <p
                      className='w-8 h-8 mr-1'
                      style={{ backgroundColor: pallete[3] }}
                    ></p>
                    <p
                      className='w-8 h-8 mr-1'
                      style={{ backgroundColor: pallete[4] }}
                    ></p>
                  </div>
                  <button
                    onClick={() => setPallete(pallete)}
                    className='px-4 py-2 my-auto font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-indigo-400'
                  >
                    use
                  </button>
                  <button
                    onClick={() => handlePalleteDelete(el._id)}
                    className='px-4 ml-2 py-2 my-auto font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-indigo-400'
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </div>

          <h1 className='text-3xl m-4 font-bold text-purple-500'>
            Saved Pandas
          </h1>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {pandas.map((el, idx) => {
              const { panda } = el;

              return (
                <div
                  className='rounded-lg border justify-center mx-auto text-center relative'
                  key={`${panda.ear}-${panda.bg}-${panda.eye}-${panda.face}-${panda.otl}-${panda.mouth}`}
                >
                  <div className='relative'>
                    <Avatar
                      width={260}
                      height={260}
                      bg={panda.bg}
                      ear={panda.ear}
                      eye={panda.eye}
                      face={panda.face}
                      otl={panda.otl}
                      mouth={panda.mouth}
                    />
                  </div>
                  <button
                    onClick={() => handlePandaDelete(el._id)}
                    className='px-10 py-2 my-2 font-bold rounded-full text-xs bg-gray-100 uppercase border-2 border-red-400'
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default CollectionPage;
