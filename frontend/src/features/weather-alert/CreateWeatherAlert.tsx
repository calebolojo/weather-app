import AppDrawer from "@/components/common/Drawer";

const CreateWeatherAlert = () => {
  const onSubmit = () => {};

  const onCancel = () => {};

  return (
    <AppDrawer
      direction="right"
      triggerText="Create Weather Alert"
      headerTitle="Weather Alert"
      headerDescription="Create weather alert and get alerted when forecasted weather breaches the threshold"
      submitButtonText="Create"
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
      saepe.
    </AppDrawer>
  );
};

export default CreateWeatherAlert;
