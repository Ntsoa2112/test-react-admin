import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  required
} from "react-admin";
import { useRecordContext} from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];


export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput label="User" source="userId" reference="users" validate={[required()]}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" size="medium" sx={{ width: "500px"}}/>
      <TextInput source="body" multiline rows={5} sx={{ width: "500px"}}/>
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput label="User" source="userId" reference="users" validate={[required()]}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" size="medium" sx={{ width: "500px"}}/>
      <TextInput source="body" multiline rows={5} sx={{ width: "500px"}}/>
    </SimpleForm>
  </Create>
);