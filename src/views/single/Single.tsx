// import CommentArea from '@/components/comments/CommentArea';
// import VideoPlayer from '@/components/player/VideoPlayer';
// import { useMediaContext } from '@/hooks/contextHooks';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Single = () => {
//   const { id } = useParams();
//   const { singleMediaItem, setSingleMediaItemId } = useMediaContext();

//   useEffect(() => {
//     if (id) {
//       setSingleMediaItemId(id);
//     }
//   }, [id, setSingleMediaItemId]);

//   return (
//     <>
//       <div className="flex min-h-screen w-full">
//         <main className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20 pl-4 pr-4">
//           {singleMediaItem === null ? (
//             <div>Loading...</div>
//           ) : (
//             <>
//               <VideoPlayer mediaItem={singleMediaItem} />
//               <CommentArea mediaItem={singleMediaItem} />
//             </>
//           )}
//         </main>

//       </div>
//     </>
//   );
// };

// export default Single;
