import React, { Component } from 'react'
import { sideBarTopPosition } from '../../constants';

export default class RightsideBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return <aside className="bg-white w-auto">
      RightsideBar
    </aside>
  }
}
