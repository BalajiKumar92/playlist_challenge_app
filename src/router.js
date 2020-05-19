import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HeaderAppBar from './component/appbar'

export default function Routes() {
    const Songs = lazy(() => import('./component/songs'));
    const Playlist = lazy(() => import('./component/playlist'));
    const CreatePlaylist = lazy(() => import('./component/createplaylist'));
    const SongList = lazy(() => import('./component/playlist/songlist'));
    return (
        <div>
            < BrowserRouter >
                <HeaderAppBar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/" exact component={Songs} />
                         <Route path="/playlists" component={Playlist} />
                         <Route path="/create-playlist"  component={CreatePlaylist} />
                         <Route path="/playlist/:id/songs" component={SongList} />
                    </Switch>
                </Suspense>
            </ BrowserRouter >
            {/* <Footer/> */}
        </div>
    );
}