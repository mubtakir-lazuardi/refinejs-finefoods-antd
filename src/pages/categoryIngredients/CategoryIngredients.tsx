import React from 'react';
import { List, Table, useTable, IResourceComponentsProps, CreateButton, EditButton, DeleteButton } from '@refinedev/core';
import { Button } from 'antd';

interface Category {
  id: number;
  name: string;
  type: string;
}

const CategoryIngredients: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable<Category>();

  return (
    <List>
      <CreateButton label="Tambah Kategori" />
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="No" render={(value, record, index) => index + 1} />
        <Table.Column dataIndex="name" title="Nama Kategori" />
        <Table.Column dataIndex="type" title="Tipe" />
        <Table.Column
          title="Aksi"
          render={(text, record: Category) => (
            <>
              <EditButton recordItemId={record.id} hideText size="small" />
              <DeleteButton recordItemId={record.id} hideText size="small" />
            </>
          )}
        />
      </Table>
    </List>
  );
};

export default CategoryIngredients;
