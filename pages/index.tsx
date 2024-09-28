import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/UseInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/Signin',
  //       permanent: false,
  //     }
  //   }
  // }

  return {
    props: {}
  }
}

export default function Home() {

  const router = useRouter();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <> 
    {/* <div className="text-white">
    Hello
    </div>
    <button className="h-10 w-full bg-white" onClick={() => router.push('/Signin')}>
      Logout
    </button> */}
      <InfoModal visible={isOpen} onClose={closeModal} ></InfoModal>
      <Navbar></Navbar>
      <Billboard></Billboard>
      <div className="pb-40" >
        <MovieList title="Trending Now" data={movies} ></MovieList>
        <MovieList title="My List" data={favorites} ></MovieList>
      </div>
    </>
  );
}
