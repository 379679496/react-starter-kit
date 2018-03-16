import Loadable from 'react-loadable';
import Loading from '../components/Loading'
const Home         = Loadable({loader: () => import('../routers/Home'), loading : Loading,delay:3000})
const ModuleList   = Loadable({loader: () => import('../routers/ModuleManage/ModuleList'), loading : Loading,delay:3000})
const FunctionList = Loadable({loader: () => import('../routers/FunctionManage/FunctionList'), loading : Loading,delay:3000})
const RoleList     = Loadable({loader: () => import('../routers/RoleManage/RoleList'), loading : Loading,delay:3000})
const EmployeesList= Loadable({loader: () => import('../routers/EmployeesManage/EmployeesList'), loading : Loading,delay:3000})
const UserList     = Loadable({loader: () => import('../routers/UserManage/UserList'), loading : Loading,delay:3000})
const UserOrder    = Loadable({loader: () => import('../routers/UserManage/UserOrder'), loading : Loading,delay:3000})
const UserManager  = Loadable({loader: () => import('../routers/UserManage/UserManager'), loading : Loading,delay:3000})
const EndOrder     = Loadable({loader: () => import('../routers/UserManage/EndOrder'), loading : Loading,delay:3000})
const VisualList   = Loadable({loader: () => import('../routers/VisualManage/VisualList'), loading : Loading,delay:3000})
const PriceConfig  = Loadable({loader: () => import('../routers/PriceManage/PriceConfig'), loading : Loading,delay:3000})


export default
[{
    'path': '/',
    'component': Home,
    'exactly': true
}, {
    'path': '/moduleManage/moduleList',
    'component': ModuleList
}, {
    'path': '/functionManage/functionList',
    'component': FunctionList
}, {
    'path': '/roleManage/roleList',
    'component': RoleList
}, {
    'path': '/employeesManage/employeesList',
    'component': EmployeesList
}, {
    'path': '/userManage/userList',
    'component': UserList
}, {
    'path': '/userManage/userOrder',
    'component': UserOrder
}, {
    'path': '/userManage/userManager',
    'component': UserManager
}, {
    'path': '/userManage/endOrder',
    'component': EndOrder
}, {
    'path': '/visualManage/visualList',
    'component': VisualList
}, {
    'path': '/priceManage/priceConfig',
    'component': PriceConfig
}];