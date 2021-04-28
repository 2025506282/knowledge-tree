const questions = [
    {
        id: 1,
        title: 'Angular常用指令?',
        score: 2,
        type: 2,
        answers: ['A', 'B', 'C', 'E'],
        options: [
            {
                id: 'A',
                title: '*ngIf'
            },
            {
                id: 'B',
                title: '*ngSwitch'
            },
            {
                id: 'C',
                title: '*ngFor'
            },
            {
                id: 'D',
                title: '*ngShow'
            },
            {
                id: 'E',
                title: '*ngTemplateOutlet'
            },
        ]
    },
    {
        id: 2,
        title: 'Angular生命周期顺序?',
        score: 2,
        type: 1,
        answers: ['A'],
        options: [
            {
                id: 'A',
                title: 'ngOnChanges => ngOnInit => ngDoCheck => ngAfterContentInit => ngAfterContentChecked => ngAfterViewInit => ngAfterViewChecked => ngOnDestory'
            },
            {
                id: 'B',
                title: 'ngOnInit => ngOnChanges => ngDoCheck => ngAfterContentInit => ngAfterContentChecked => ngAfterViewInit => ngAfterViewChecked => ngOnDestory'
            },
            {
                id: 'C',
                title: 'ngOnInit => ngOnChanges => ngDoCheck => ngAfterViewInit => ngAfterViewChecked => ngAfterContentInit => ngAfterContentChecked =>  ngOnDestory'
            },
            {
                id: 'D',
                title: 'ngOnChanges => ngOnInit => ngDoCheck =>  ngAfterViewInit => ngAfterViewChecked =>ngAfterContentInit => ngAfterContentChecked => ngOnDestory'
            },
        ]
    },
    {
        id: 22,
        title: 'Angular自带的管道有哪些?',
        score: 2,
        type: 2,
        answers: ['A', 'B', 'C', 'D', 'E'],
        options: [
            {
                id: 'A',
                title: 'DatePipe'
            },
            {
                id: 'B',
                title: 'JsonPipe'
            },
            {
                id: 'C',
                title: 'PercentPipe'
            },
            {
                id: 'D',
                title: 'CurrencyPipe '
            },
            {
                id: 'E',
                title: 'KeyValuePipe '
            }
        ]
    },
    {
        id: 3,
        title: 'Angular组件通信方式？',
        type: 2,
        score: 2,
        answers: ['A', 'B', 'C'],
        options: [
            {
                id: 'A',
                title: '通过Service通信'
            },
            {
                id: 'B',
                title: '通过@Input()和@Output()'
            },
            {
                id: 'C',
                title: '通过ViewChild获取组件实例，从而调用子组件的方法'
            },
            {
                id: 'D',
                title: '通过ref获取组件实例，从而调用子组件的方法'
            },
        ]
    },
    {
        id: 33,
        title: 'Angular中关于路由说法正确的是？',
        type: 2,
        score: 2,
        answers: ['A', 'B', 'C'],
        options: [
            {
                id: 'A',
                title: 'Router 在匹配路由时使用“先到先得”策略，所以应该在不那么具体的路由前面放置更具体的路由'
            },
            {
                id: 'B',
                title: `
                  this.activateRoute.queryParams.subscribe(params => {
                    this.name = params['name'];
                  }),改ActivateRoute方法可以获取路由参数
                `
            },
            {
                id: 'C',
                title: `
                this.router.navigate(['items']),改方法可以导航路由
                `
            },
        ]
    },
    {
        id: 34,
        title: 'Angular中关于路由守卫说法正确的是？',
        type: 2,
        score: 2,
        answers: ['A', 'B', 'C', 'D', 'E'],
        options: [
            {
                id: 'A',
                title: 'CanActivate：导航到某路由的情况'
            },
            {
                id: 'B',
                title: `CanActivateChild：导航到某子路由的情况`
            },
            {
                id: 'C',
                title: `CanDeactivate：从当前路由离开的情况`
            },
            {
                id: 'D',
                title: `Resolve：路由激活前获取路由数据`
            },
            {
                id: 'E',
                title: `CanLoad：异步导航到某特性模块（懒加载）`
            },
        ]
    },
    {
        id: 4,
        title: 'Angular中关于ng-template,ng-content说法正确的是？',
        type: 2,
        score: 2,
        answers: ['A', 'B', 'C', 'D'],
        options: [
            {
                id: 'A',
                title: 'ng-content相当于Vue中的slot'
            },
            {
                id: 'B',
                title: 'ng-template相当于一个变量视图，默认不显示，可以用*ngTemplateOutle或者*ngIf等其他结构性指令显示视图'
            },
            {
                id: 'C',
                title: 'ng-template,ng-content都可以作为一个模版放到子组件中'
            },
            {
                id: 'D',
                title: 'ng-container：此标签不渲染成DOM；默认显示标签内部内容，也可以使用结构型指令'
            },
        ]
    },
    {
        id: 5,
        title: 'Rxjs中Subject&BehaviorSubject说法正确的是？',
        type: 2,
        score: 2,
        answers: ['A', 'C'],
        options: [
            {
                id: 'A',
                title: 'BehaviorSubject初始化有一个默认值，且初始化时默认就会发布'
            },
            {
                id: 'B',
                title: 'Subject初始化有一个默认值，且初始化时默认就会发布'
            },
            {
                id: 'C',
                title: 'BehaviorSubject会保留最后一次的更新值'
            },
            {
                id: 'D',
                title: 'Subject会保留最后一次的更新值'
            },
        ]
    },
    {
        id: 6,
        title: 'TypeScript基础类型有哪些？',
        type: 2,
        score: 2,
        answers: ['A', 'B', 'C', 'D'],
        options: [
            {
                id: 'A',
                title: 'any'
            },
            {
                id: 'B',
                title: 'never'
            },
            {
                id: 'C',
                title: "元祖例如：const x = [string, number] = ['123', 1]"
            },
            {
                id: 'D',
                title: 'undefined'
            },
        ]
    },
    {
        id: 67,
        title: 'Git切换一条新的分支正确的是？',
        type: 1,
        score: 2,
        answers: ['B'],
        options: [
            {
                id: 'A',
                title: 'git checkout '
            },
            {
                id: 'B',
                title: 'git checkout -b'
            },
            {
                id: 'C',
                title: "git merge "
            },
            {
                id: 'D',
                title: 'git rebase'
            },
        ]
    },
]

module.exports = {questions}