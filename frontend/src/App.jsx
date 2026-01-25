import { Routes, Route } from 'react-router-dom';
import { TopBar } from '@dproano_npm/website-topbar';

import { Home, Blog, About, Virus, Music, Notes, NotFound, HardwareHacking, Purt } from './pages/index';

function App() {
	return (
		<div className="layout">
			<TopBar />
			<div className="content">
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/virus" element={<Virus />} />
					<Route path="/music" element={<Music />} />
					<Route path="/notes" element={<Notes />} />
               <Route path="/HardwareHacking" element={<HardwareHacking />} />
               <Route path="/Purt" element={<Purt />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
