import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="layout-container">
            <h1 className="layout-heading">Layout</h1>

            <div className="options-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                  id="content"
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  id="leftNavbar"
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  id="rightNavbar"
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
