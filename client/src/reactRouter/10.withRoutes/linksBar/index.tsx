import { useNavigate } from "react-router-dom";
import {
  WithPropsRoute,
  WithConditionRoute,
  WithMapRoute,
  WithStateRoute,
  WithUseEffectRoute,
  WithUseMemoRoute,
  WithUseCallBackRoute,
  WithMobxRoute,
} from "reactRouter/paths";
import { flexRow } from "styles";

const LinksBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        ...flexRow,
      }}
    >
      <button
        onClick={() => navigate(WithPropsRoute)}
      >{`aller vers ${WithPropsRoute}`}</button>
      <button
        onClick={() => navigate(WithConditionRoute)}
      >{`aller vers ${WithConditionRoute}`}</button>
      <button
        onClick={() => navigate(WithMapRoute)}
      >{`aller vers ${WithMapRoute}`}</button>
      <button
        onClick={() => navigate(WithStateRoute)}
      >{`aller vers ${WithStateRoute}`}</button>
      <button
        onClick={() => navigate(WithUseEffectRoute)}
      >{`aller vers ${WithUseEffectRoute}`}</button>
      <button
        onClick={() => navigate(WithUseMemoRoute)}
      >{`aller vers ${WithUseMemoRoute}`}</button>
      <button
        onClick={() => navigate(WithUseCallBackRoute)}
      >{`aller vers ${WithUseCallBackRoute}`}</button>
      <button
        onClick={() => navigate(WithMobxRoute)}
      >{`aller vers ${WithMobxRoute}`}</button>
    </div>
  );
};

export default LinksBar;
