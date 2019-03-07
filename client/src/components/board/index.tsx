export const a = 'nothing';
// import React, { Fragment } from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
//
// // Todo
// // Appropriate query here
//
// const GET_LAUNCHES = gql`
//     query launchList($after: String) {
//         launches(after: $after) {
//             cursor
//             hasMore
//             launches {
//                 id
//                 isBooked
//                 rocket {
//                     id
//                     name
//                 }
//                 mission {
//                     name
//                     missionPatch
//                 }
//             }
//         }
//     }
// `;
//
// // Change it to respective board
// export default function Launches() {
//     return (
//         <Query query={GET_LAUNCHES}>
//             {({ data, loading, error }) => {
//                 if (loading) return <div>Loading</div>;
//                 if (error) return <p>ERROR</p>;
//
//                 return (
//                     <Fragment>
//                         {data.launches &&
//                         data.launches.launches &&
//                         data.launches.launches.map(launch => (
//                             <div
//                                 key={launch.id}
//                                 launch={launch}
//                             />
//                         ))}
//                     </Fragment>
//                 );
//             }}
//         </Query>
//     );
// };
