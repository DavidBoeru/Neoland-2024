import { App } from "../App"
import { createBrowserRouter } from "react-router-dom"
import { ChangePassword, CheckCode, DashBoard, ForgotPassword, FormProfile, Home, Login, Profile, Register } from "../pages"
import { Protected, ProtectedCheckChildren } from "../components"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'/',
                element:(
                    <Protected>
                        <Home />
                    </Protected>
                ),
            },
            {
                path:'/register',
                element:<Register />,
            },
            {
                path:'/login',
                element:<Login />,
            },
            {
                path:'/profile',
                element:(
                    <Protected>
                        <Profile />
                    </Protected>
                ),
                children: [{
                    path:'/profile',
                    element: (
                        <Protected>
                            <FormProfile />
                        </Protected>
                    ),
                }],
            },
            {
                path:'/dashboard',
                element:(
                <Protected>
                    <DashBoard />
                </Protected>),
            },
            {
                path:'/forgotPassword',
                element:<ForgotPassword />,
            },
            {
                 path: '/profile/changepassword',
                 element: <ChangePassword/>
            },
            {
                path:'/verifyCode',
                element:(
                    <ProtectedCheckChildren>
                        <CheckCode />
                    </ProtectedCheckChildren>
                ),
            },
        ]
    }
])