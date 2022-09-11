import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import { ThemeProvider, createTheme, Box, useTheme, useMediaQuery } from '@mui/material';
import { uiContext } from './context/ContextProvider';
import BackToTop from './components/UI/BackTopTop';
import ScrollToTop from './components/UI/ScrollToTop';
import { Suspense } from 'react';
import Progress from './components/UI/Progress';
import { useState } from 'react';
import { useEffect } from 'react';

const Analytics = React.lazy(() => import('./pages/Analytics'));
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetailsPage'));
const Employees = React.lazy(() => import('./pages/Employees'));
const Customers = React.lazy(() => import('./pages/Customers'));
const CustomerDetailsPage = React.lazy(() => import('./pages/CustomerDetailsPage'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const Chat = React.lazy(() => import('./pages/Chat'));
const Mail = React.lazy(() => import('./pages/Mail'));
const Calendar = React.lazy(() => import('./pages/Calendar'));
const Kanban = React.lazy(() => import('./pages/Kanban'));
const Editor = React.lazy(() => import('./pages/Editor'));
const ColorPicker = React.lazy(() => import('./pages/ColorPicker'));
const Line = React.lazy(() => import('./pages/Charts/Line'));
const Area = React.lazy(() => import('./pages/Charts/Area'));
const Bar = React.lazy(() => import('./pages/Charts/Bar'));
const Pie = React.lazy(() => import('./pages/Charts/Pie'));
const Financial = React.lazy(() => import('./pages/Charts/Financial'));
const ColorMapping = React.lazy(() => import('./pages/Charts/ColorMapping'));
const Pyramid = React.lazy(() => import('./pages/Charts/Pyramid'));
const Stacked = React.lazy(() => import('./pages/Charts/Stacked'));

const App = () => {
	const { darkMode, currentColor, secondaryColor, setMenu } = useContext(uiContext);
	const [isLoading, setIsLoading] = useState(true);

	const getMode = darkMode === 'dark' ? 'dark' : 'light';

	if (darkMode === 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

	const getDesignTokens = (mode) => ({
		breakpoints: {
			values: {
				x: 0,
				xs: 500,
				sm: 650,
				md: 950,
				lg: 1280,
				xl: 1536
			}
		},
		palette: {
			mode,
			...(mode === 'light'
				? {
					// palette values for light mode
					primary: {
						main: currentColor,
					},
					secondary: {
						main: secondaryColor,
					},
					text: {
						primary: '#333',
						secondary: '#a19fad',
						disabled: '#868395',
					},
				}
				: {
					// palette values for dark mode
					primary: {
						main: currentColor,
					},
					secondary: {
						main: secondaryColor,
					},
					background: {
						default: '#282c34',
						paper: '#282c34',
					},
					text: {
						primary: '#bcbac4',
						secondary: '#a19fad',
						disabled: '#bcbac4'
					},
				}),
		},
		typography: {
			fontFamily: 'Poppins, sans-serif',
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
			 @font-face {
				font-family: 'Poppins';
				font-style: normal;
				font-weight: 400;
			 }
		  `,
			},
			MuiCard: {
				styleOverrides: {
					root: {
						border: 'none',
						borderRadius: '20px',
						boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px'
					}
				}
			}
		}
	});

	const appTheme = createTheme(getDesignTokens(getMode));
	const theme = useTheme();
	const lgWidth = useMediaQuery(theme.breakpoints.down(1280));

	const handleLoading = () => {
		setIsLoading(false);
	}

	useEffect(() => {
		if (lgWidth) {
			setMenu(false);
		} else {
			setMenu(true);
		}
		window.addEventListener("load", handleLoading);
		return () => window.removeEventListener("load", handleLoading);
	}, [setMenu, lgWidth]);

	return (
		<BrowserRouter>
			<ThemeProvider theme={appTheme}>
				{isLoading && <Progress />}
				{!isLoading &&
					<Navigation>
						<Suspense fallback={<Progress />}>
							<ScrollToTop />
							<Box>
								<Routes>
									<Route path='/' element={<Analytics />} exact />
									<Route path='/ecommerce' element={<Ecommerce />} exact />
									<Route path='/orders' element={<Orders />} />
									<Route path='/products' element={<Products />} />
									<Route path='/employees' element={<Employees />} />
									<Route path='/customers' element={<Customers />} />
									<Route path='/userprofile' element={<UserProfile />} />
									<Route path='/chat' element={<Chat />} />
									<Route path='/mail' element={<Mail />} />
									<Route path='/calendar' element={<Calendar />} />
									<Route path='/kanban' element={<Kanban />} />
									<Route path='/editor' element={<Editor />} />
									<Route path='/color-picker' element={<ColorPicker />} />
									<Route path='/line' element={<Line />} />
									<Route path='/area' element={<Area />} />
									<Route path='/bar' element={<Bar />} />
									<Route path='/pie' element={<Pie />} />
									<Route path='/financial' element={<Financial />} />
									<Route path='/color-mapping' element={<ColorMapping />} />
									<Route path='/pyramid' element={<Pyramid />} />
									<Route path='/stacked' element={<Stacked />} />
									<Route path='/products/:productID' element={<ProductDetailsPage />} />
									<Route path='/customers/:customerID' element={<CustomerDetailsPage />} />
									<Route path="*" element={<Navigate to="/" replace />} />
								</Routes>
							</Box>
							<Footer />
							<BackToTop />
						</Suspense>
					</Navigation>
				}
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
