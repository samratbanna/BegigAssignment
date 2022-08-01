import {Button, Skeleton} from '@rneui/themed';
import React from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Section} from '../Components';

export const Loading = ({loading, readyComponent}) => {
  return (
    <Container>
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        height={80}
        style={{marginTop: 5}}
      >
      <Skeleton circle width={40} height={40} style={{backgroundColor: 'black'}}/>

        </Skeleton>
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        height={80}
        style={{marginTop: 5}}
      />
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        height={80}
        style={{marginTop: 5}}
      />
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="wave"
        height={80}
        style={{marginTop: 5, borderRadius: 10}}
      />
    </Container>
  );
};

export default React.memo(
  ({
    onRefresh,
    loading,
    fixed,
    bg,
    onLoad,
    style,
    containerStyle,
    renderHeader,
    action,
    noData,
    children,
    ...other
  }) => {
    return (
      <Container bg={bg} style={style}>
        {renderHeader ? renderHeader() : null}
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Content
            onRefresh={onRefresh}
            fixed={fixed}
            loading={loading}
            containerStyle={containerStyle}
            children={children}
          />
        )}

        {action ? <Footer action={action} /> : null}
      </Container>
    );
  },
);

const Content = ({fixed, children, onRefresh, loading, containerStyle}) => {
  const fallback = () => {};
  return fixed ? (
    <Container style={containerStyle}>{children}</Container>
  ) : (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      nestedScrollEnabled
      contentContainerStyle={containerStyle}
      refreshControl={
        <RefreshControl
          enabled={onRefresh ? true : false}
          refreshing={onRefresh && loading ? true : false}
          onRefresh={onRefresh || fallback}
        />
      }>
      {children}
    </ScrollView>
  );
};

const Footer = ({action}) => {
  const {label, renderAction, onAction, disabled, bg} = action;
  // console.log('footer action disabled', disabled);

  return renderAction ? (
    renderAction()
  ) : label ? (
    <Section>
      <Button
        zeroMargin
        color={bg}
        label={label}
        onPress={onAction}
        disabled={disabled}
      />
    </Section>
  ) : null;
};
