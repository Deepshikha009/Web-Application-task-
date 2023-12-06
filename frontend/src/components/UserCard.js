import React from 'react';


const UserCard = ({ getUser, searchQuery }) => {
    // Calculate the range of users to display based on pagination
    //   const startIndex = (currentPage - 1) * itemsPerPage;
    //   const endIndex = startIndex + itemsPerPage;
    //   const usersToDisplay = data?.Data.slice(startIndex, endIndex);
    console.log(getUser)

    return (
        <div className="container">
            <div className="row">
                {
                    getUser.length === 0 ? "" :
                        <>
                            {
                                getUser.allUser.filter((user) => user.first_name.toLowerCase().includes(searchQuery.toLowerCase())).map((u) => {
                                    return (
                                        <div className='col-sm-3 mt-3'>
                                            <div className="card" >
                                                <img src={u.avatar} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{u.first_name} {u.last_name}</h5>
                                                    <h5 className='card-title'>Email: {u.email}</h5>
                                                    <h5 className='card-title'>Gender: {u.gender}</h5>
                                                    <p className="card-text">Domain: {u.domain}</p>
                                                    <p className="card-text">Available: {u.available}</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                }

            </div>
        </div>
    );
};

export default UserCard;


