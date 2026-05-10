import { Button } from "@/@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/@/components/ui/drawer";

export interface DrawerProps {
  direction: "right" | "left";
  triggerText: string;
  headerTitle: string;
  headerDescription: string;
  children: any;
  submitButtonText: string;
  onSubmit: any;
  cancelButtonText?: string;
  onCancel: any;
}

const AppDrawer = ({
  direction = "right",
  triggerText,
  headerTitle,
  headerDescription,
  submitButtonText = "Submit",
  onSubmit,
  cancelButtonText = "Cancel",
  onCancel,
  children,
}: DrawerProps) => {
  return (
    <Drawer direction={direction}>
      <DrawerTrigger>{triggerText}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{headerTitle}</DrawerTitle>
          <DrawerDescription>{headerDescription}</DrawerDescription>
        </DrawerHeader>
        <div>{children}</div>
        <DrawerFooter>
          <Button onClick={onSubmit}>{submitButtonText}</Button>
          <DrawerClose>
            <Button onClick={onCancel} variant="outline">
              {cancelButtonText}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
