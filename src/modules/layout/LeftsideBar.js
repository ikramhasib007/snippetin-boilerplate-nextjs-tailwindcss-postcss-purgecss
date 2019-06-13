import React, { Component } from 'react'
import { sideBarTopPosition } from '../../constants';
import LinkStack from './components/LinkStack';

var links = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, magni!',
    url: '#'
  }
];

export default class LeftsideBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return <aside className="bg-white w-auto h-screen border-r">
      <div className="flex flex-col bg-gray-100">
        <a className="w-full p-3 lg:p-4 flex items-center justify-center" href="#">
          <img className="rounded-full h-24 w-24 lg:h-20 lg:w-20" src="/static/assets/images/user.png" alt="User Name"/>
        </a>
        <ul className="flex flex-col px-4 md:px-6 lg:px-8 w-full sm:text-center">
          <li className="block md:flex md:justify-between lg:flex lg:justify-between"><a className="block text-gray-700 hover:text-black md:flex md:justify-end lg:flex lg:justify-end md:w-1/2 lg:w-1/2 pr-1" href="#">Snippets</a><span className="pl-2 badge primary">233333</span></li>
          <li className="block md:flex md:justify-between lg:flex lg:justify-between"><a className="block text-gray-700 hover:text-black md:flex md:justify-end lg:flex lg:justify-end md:w-1/2 lg:w-1/2 pr-1" href="#">Bookmarks</a><span className="pl-2 badge default">4470</span></li>
          <li className="block md:flex md:justify-between lg:flex lg:justify-between"><a className="block text-gray-700 hover:text-black md:flex md:justify-end lg:flex lg:justify-end md:w-1/2 lg:w-1/2 pr-1" href="#">Shares</a><span className="pl-2 badge success">125553</span></li>
          <li className="block md:flex md:justify-between lg:flex lg:justify-between"><a className="block text-gray-700 hover:text-black md:flex md:justify-end lg:flex lg:justify-end md:w-1/2 lg:w-1/2 pr-1" href="#">Reputations</a><span className="pl-2 badge repus">226,603</span></li>
        </ul>
        <hr className="w-full border-t"/>
        <ul className="flex justify-around">
          <li><a href="#"><i className="fas fa-graduation-cap"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i className="fab fa-medium"></i></a></li>
          <li><a href="#"><i className="fab fa-stack-overflow"></i></a></li>
        </ul>
        <hr className="w-full border-t mb-0" />
      </div>
      <LinkStack
        title="Top Links"
        links={links}
      />
      <LinkStack
        title="Recently Visits"
        links={links}
      />
      <LinkStack
        title="Favorite Links"
        links={links}
      />
    </aside>
  }
}
