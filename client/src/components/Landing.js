import React, { Component } from 'react'
import { Layout, Menu, Card, Icon } from 'antd'
import { connect } from 'react-redux'

const { Meta } = Card
const { Content, Sider } = Layout

class Landing extends Component {
  pizzasRenderer = () => {
    if (this.props.pizzas) {
      return Object.values(this.props.pizzas).map(pizza => {
        return (
          <Card
            style={{ width: 250, marginTop: 8 }}
            actions={[
              <Icon type="heart" />,
              <Icon type="shopping-cart" />,
              <Icon type="ellipsis" />
            ]}
          >
            <Meta title={pizza.name} description={`${pizza.price}zł`} />
          </Card>
        )
      })
    }
    return null
  }

  render() {
    return (
      <Layout>
        <Sider width={200}>
          <Menu mode="inline" style={{ height: '100%' }}>
            <Menu.Item key="1">key1</Menu.Item>
            <Menu.Item key="2">key2</Menu.Item>
            <Menu.Item key="3">key3</Menu.Item>
            <Menu.Item key="4">key4</Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            padding: '24px',
            background: '#fff',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {this.pizzasRenderer()}
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = ({ pizzas }) => {
  return {
    pizzas
  }
}

export default connect(mapStateToProps)(Landing)
