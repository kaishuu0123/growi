
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import AppContainer from '../../../services/AppContainer';

import { createSubscribedElement } from '../../UnstatedUtils';

class Customize extends React.Component {

  render() {
    const { t } = this.props;

    return (
      // fieldset + legend ではなく、row + header + フォームコンポーネントに書き換える(GC244着手時に対応)
      <div className="row">
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Layout')}</h3>
          </legend>
        </div>
        {/* レイアウトフォームの react componentをここで呼ぶ(GW-244) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Theme')}</h3>
          </legend>
        </div>
        {/* テーマフォームの react componentをここで呼ぶ(GW-245) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Behavior')}</h3>
          </legend>
        </div>
        {/* 挙動フォームの react componentをここで呼ぶ(GW-246) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Function')}</h3>
          </legend>
        </div>
        {/* 機能フォームの react componentをここで呼ぶ(GW-276) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Code Highlight')}</h3>
          </legend>
        </div>
        {/* コードハイライトフォームの react componentをここで呼ぶ(GW-277) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.custom_title')} </h3>
          </legend>
        </div>
        {/* カスタムタイトルフォームの react componentをここで呼ぶ(GW-278) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Custom CSS')}</h3>
          </legend>
        </div>
        {/* カスタムCSSフォームの react componentをここで呼ぶ(GW-279) */}
        <div className="col-md-12">
          <legend>
            <h3>{t('customize_page.Custom script')} </h3>
          </legend>
        </div>
        {/* カスタムスクリプトフォームの react componentをここで呼ぶ(GW-280) */}
      </div>
    );
  }

}

const CustomizeWrapper = (props) => {
  return createSubscribedElement(Customize, props, [AppContainer]);
};

Customize.propTypes = {
  t: PropTypes.func.isRequired, // i18next
  appContainer: PropTypes.instanceOf(AppContainer).isRequired,
};

export default withTranslation()(CustomizeWrapper);
